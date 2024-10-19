export default function Linkboton({ image_link, descripcion }) {
    return (
        <div className="flex flex-col">
            <div className="flex justify-center">
                <img className="mt-2" src={image_link} alt="" />
            </div>
            <h2 className="font-semibold text-lg my-2 text-center"> {descripcion} </h2>
        </div>
    )
}