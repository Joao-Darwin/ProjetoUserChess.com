const urlAPiChess = "https://api.chess.com"

export const findUserByName = async (userName) => {
    try {
        let url = `${urlAPiChess}/pub/player/${userName}`

        const response = await fetch(url);
        const codeResponse = response.status;
        const data = await response.json();

        return { data, codeResponse };
    } catch (error) {
        console.log(error.message);
    }
}

export const findStatsByUser = async (userName) => {
    try {
        let url = `${urlAPiChess}/pub/player/${userName}/stats`;

        const response = await fetch(url);
        const codeResponse = response.status;
        const data = await response.json();

        return { data, codeResponse }
    } catch (error) {
        console.log(error.message);
    }
}