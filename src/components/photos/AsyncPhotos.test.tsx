import { render, waitForElementToBeRemoved, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {rest} from 'msw'
import { setupServer } from 'msw/node'
import { PhotosList } from './AsyncPhotos'
import { Photo } from './types'

const server = setupServer(
    //mock POST favurite property
    rest.post('/api/favourite', async (req, res, ctx) => {
        const photo = await req.json()
        return res(ctx.json({...photo, favourite: !photo.favourite}))
    }),

    //mock get data
    rest.get('/api/photos', (req, res, ctx) => {
    const name = req.url.searchParams.get('name') || 'Unknown'
    return res(ctx.json([
        {
            id: 1,
            title: name + ' hello async mock',
            thumbnailUrl: '/photo1.png',
            favourite: false
        }
    ]))
}))

describe('test async component', () => {
    beforeAll(() =>server.listen())
    afterAll(() => server.close())
    afterEach(() => server.resetHandlers())

    describe('test mock async component', () => {
        beforeEach(async () => {
            render(<PhotosList />)
            await waitForElementToBeRemoved(() => screen.getByText(/Loading.../i))
        })
        test('test mock get API', () => {
            expect(screen.getByText('Unknown hello async mock')).toBeInTheDocument()
        })

        test('when type name as a query from input ', async() => {
            userEvent.type(screen.getByPlaceholderText('your name'), 'mando')
            await waitFor(()=>expect(screen.getByText('mando hello async mock')).toBeInTheDocument())
        })

        test('click refresh btn and error MSG', async() => {
            server.use((rest.get('/api/photos', (req, res, ctx) => {
                return res(
                    ctx.status(500), //error
                    ctx.json({message: 'error'})
                )
            })))
            userEvent.click(screen.getByText('Refresh'))
            await waitFor(() =>expect(screen.getByText('error')).toBeInTheDocument())
        })

        test('add/POST to favourite', async () => {
            userEvent.click(screen.getByText('Add To Favourites'))
            // await waitForElementToBeRemoved(() => screen.getByText('Add To Favourites'))
            await waitFor(() => expect(screen.getByText('Remove from Favourites')).toBeInTheDocument())
            expect(screen.queryByText('Add To Favourites')).not.toBeInTheDocument()
        })
    })
})