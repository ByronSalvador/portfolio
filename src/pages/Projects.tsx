interface Props { reference: React.RefObject<HTMLElement> }
import Project from "../assets/images/menuPrincipal.jpg"
import Project2 from "../assets/images/NivelJuego.jpg"

export default function Projects({ reference }: Props) {
    return (
        <section
            data-sections="Projects"
            ref={reference}
            className=" pb-500 pt-5 min-h-[1000px] h-[700px] w-full bg_gradient_home">
            <section className="pb-500 w-standard-md mx-auto flex justify-center items-start text-slate-50 relative gap-16 h-full">
                <section className=" flex flex-col justify-center items-center gap-16 relative">
                    <h1 className=" text-9xl tracking-tighter font-medium flex flex-col leading-[100px]">
                        <span className="">Projects</span>
                    </h1>
                    <section className="flex justify-center items-center gap-16">
                        <img className="h-[300px] min-h-[300px]  object-cover rounded border-primary-900" src={Project} alt="MenuGame" />
                        <p className="text-pretty w-96 px-2 mb-10 text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione porro, neque provident quaerat cupiditate fugit sint. Voluptatibus esse, sunt, sint officiis eum eos dignissimos maiores qui doloremque quas, ea dolor!</p>
                    </section>

                    <section className="flex justify-center items-center gap-16">
                        <img className="h-[300px] min-h-[300px]  object-cover rounded border-primary-900" src={Project2} alt="MenuGame" />
                        <p className="text-pretty w-96 px-2 mb-10 text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione porro, neque provident quaerat cupiditate fugit sint. Voluptatibus esse, sunt, sint officiis eum eos dignissimos maiores qui doloremque quas, ea dolor!</p>
                    </section>

                    <button className="bg-primary-900 text-lg px-7 py-3 rounded-full font-semibold mb-10">
                        <a href="https://github.com/ByronSalvador">Projects</a>
                    </button>
                </section>
            </section>
        </section>
    )
}