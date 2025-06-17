import Greeting from "./Greeting"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

describe('Greeting component', () => {
    test('hello world shows on screen as text', () => {
        // Arrange
        render(<Greeting />)

        // Act
        // ...nothing

        // Assert
        const helloWorldElement = screen.getByText('Hello world', { exact : false})
        expect(helloWorldElement).toBeInTheDocument()
    })

    test('renders good to se you before button is clicked', () => {
        render(<Greeting />)

        const goodToSeeYouElement = screen.getByText('Good to see you')
        expect(goodToSeeYouElement).toBeInTheDocument()
    })

    test('renders changed! after button is clicked', () => {
        render(<Greeting />)

        const changeTextButton = screen.getByRole('button')
        userEvent.click(changeTextButton)

        const changedElement = screen.getByText('Changed', {exact : false})
        expect(changedElement).toBeInTheDocument()
    })

})
