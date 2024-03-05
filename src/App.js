import logo from './logo.svg';
import './App.css';

function App() {
// random-data-generator.js

    /**
     * Generates random data for testing purposes.
     */
    class RandomDataGenerator {
        /**
         * Generates a random name.
         * @returns {string} A random name.
         */
        static generateName() {
            const names = ['Alice', 'Bob', 'Charlie', 'David', 'Emma', 'Frank', 'Grace'];
            const randomIndex = Math.floor(Math.random() * names.length);
            return names[randomIndex];
        }

        /**
         * Generates a random age between a specified range.
         * @param {number} minAge - Minimum age.
         * @param {number} maxAge - Maximum age.
         * @returns {number} A random age.
         */
        static generateAge(minAge, maxAge) {
            return Math.floor(Math.random() * (maxAge - minAge + 1)) + minAge;
        }

        /**
         * Generates a random email address.
         * @returns {string} A random email address.
         */
        static generateEmail() {
            const domains = ['gmail.com', 'yahoo.com', 'outlook.com', 'example.com'];
            const randomIndex = Math.floor(Math.random() * domains.length);
            const randomName = this.generateName().toLowerCase();
            return `${randomName}@${domains[randomIndex]}`;
        }
    }

    module.exports = RandomDataGenerator;


    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
