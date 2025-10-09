

export const NameList = ({setName}) => {
    return (
        <nav>
            <button onClick={() => setName("Data")}>Data</button>
            <button onClick={() => setName("Reyes")}>Reyes</button>
            <button onClick={() => setName("Yolanda")}>Yolanda</button>
        </nav>
    )
}