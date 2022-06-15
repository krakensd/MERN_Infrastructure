import * as usersService from "../../utilities/users-service"; // better

export default function OrderHistoryPage() {

    async function handleCheckToken(evt) {
        const expDate = await usersService.checkToken();
        console.log(expDate);
    }

    return (
        <>
            <h1>OrderHistoryPage</h1>
            <button onClick={handleCheckToken}>Check When My Login Expires</button>
        </>
    );
}