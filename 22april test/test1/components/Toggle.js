function Toggle() {
    const myFunction = () => {
        var element = document.body;
        element.classList.toggle("dark-mode");
    }
    return (
        <div>
            <h2>Toggle Dark/Light Mode</h2>
            <p>Click the button to toggle between dark and light mode for this page.</p>

            <button onClick={myFunction}>Toggle dark mode</button>
        </div>
    )
}