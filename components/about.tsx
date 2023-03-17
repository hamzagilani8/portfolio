

const About = ({ data }: { data: any }) => {
    const { title, body } = data
    return (
        <div className="flex flex-col justify-center m-56">
            <div>
                <p className="text-xl text-blue font-barlow font-medium">{title}</p>
                <h1 className="text-6xl text-start text-black font-display font-extrabold leading-tight">{body[0]}</h1>
            </div>
            <div className="flex flex-row justify-evenly mt-20">
                    <h1 className="text-4xl font-extrabold font-display text-blue w-1/2 leading-tight">I design professional & beautiful websites</h1>
                    <span className="flex flex-col justify-start ml-10 w-1/2">
                    <h1 className="text-base text-black font-barlow font-thin leading-relaxed">{body[1]}</h1>
                    <h1 className="text-base text-grey mt-4 font-barlow font-thin leading-relaxed">{body[2]}</h1>
                    </span>
            </div>
        </div>
    )
}

export default About