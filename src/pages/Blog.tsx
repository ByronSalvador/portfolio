interface Props { reference: React.RefObject<HTMLElement> }
import AboutMeImage from "../assets/images/blog.png"

export default function Blog({ reference }: Props) {
    return (
        <section
            data-sections="Blog"
            ref={reference}
            className="pb-5 min-h-[700px] h-[700px] w-full bg_gradient_home">
            <section className="w-standard-md mx-auto flex justify-center items-end text-slate-50 relative gap-16 h-full">
                <section className="flex justify-center items-end gap-16 relative">
                    <h1 className="text-9xl absolute top-4 left-1/2 tracking-tighter font-medium flex flex-col leading-[100px]">
                        <span className="">Blog</span>
                        
                    </h1>
                    <img className="rounded-full h-[600px] min-h-[600px] aspect-square object-cover" src={AboutMeImage} alt="desktop_programming" />
                    <section>
                        <p className="text-pretty w-96 px-2 mb-10 text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione porro, neque provident quaerat cupiditate fugit sint. Voluptatibus esse, sunt, sint officiis eum eos dignissimos maiores qui doloremque quas, ea dolor!</p>
                        <button className="bg-primary-900 text-lg px-7 py-3 rounded-full font-semibold mb-10">
                            Blog
                        </button>
                    </section>
                </section>

            </section>
        </section>
    )
}
