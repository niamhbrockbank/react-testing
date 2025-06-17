import Greeting from "./Greeting"
import { render, screen } from "@testing-library/react"

test('hello world shows on screen as text', () => {
    // Arrange
    render(<Greeting />)

    // Act
    // ...nothing

    // Assert
    const helloWorldElement = screen.getByText('Hello world', { exact : false})
    expect(helloWorldElement).toBeInTheDocument()
})