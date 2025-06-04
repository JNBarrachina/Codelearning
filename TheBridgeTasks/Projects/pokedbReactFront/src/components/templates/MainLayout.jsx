import "./MainLayout.scss"

export const MainLayout = ({leftContent, rightContent}) => {
    return (
        <main className="mainLayout">
            <h1 className="mainTitle">Characters</h1>
            <article className="leftContainer">
                {leftContent}
            </article>
            <article className="rightContainer">
                {rightContent}
            </article>
        </main>
    )
}
