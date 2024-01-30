import NavBar from "./NavBar";
import Footer from "./Footer";

function createEvent() {


    return (
        <>
            <>
            <div id="navbar-container">
                <NavBar />
            </div>

            <div id="container">

                <div id="header">
                    <h2 id="text">Create a new Tournament</h2>
                    <div id="underline"></div>
                </div>

                <div id="inputs">
                    <div id="input">
                        <input
                            type="text"
                            placeholder="Tournament Name"
                        />
                    </div>

                    <div id="input">
                        <input
                            type="text"
                            placeholder="mm/dd/yyyy"
                        />
                    </div>
                </div>
                <div id="submit-container">
                    <div id="submit">
                        Create
                    </div>
                </div>
            </div>

            <div id="footer-container">
                <Footer />
            </div>
        </>
        </>
    )
}

export default createEvent;