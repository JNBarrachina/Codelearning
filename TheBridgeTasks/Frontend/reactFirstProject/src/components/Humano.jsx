export const Humano = ({humanProps, img}) => {
    return (
        <article className="humanBox">
            <h3>{humanProps.name}</h3>
            <p>Edad: {humanProps.age}</p>
            <p>Origen: {humanProps.origin}</p>
            <img src={img} alt="" className="humanImg"/>
        </article>
    )
}