import React from 'react'
import { LampContainer } from './ui/lamp'
import { AnimatedTooltip } from './ui/animated-tooltip';

const people = [
    {
        id: 1,
        name: "Langchain",
        image: "/langchain.png"
    },
    {
        id: 2,
        name: "Numpy",
        image: "/numpy.png"
    },
    {
        id: 3,
        name: "Express JS",
        image: "/express.png"
    },
    {
        id: 4,
        name: "Next JS",
        image: "/next.png"
    },
    {
        id: 5,
        name: "Javascript",
        image: "/js.png"
    },
    {
        id: 6,
        name: "Python",
        image: "/python.png"
    },
];

const Section2 = () => {
    return (
        <section className=' relative  flex flex-col justify-between h-screen bg-slate-950 w-full'>
            <LampContainer>
                <div className=' text-2xl font-semibold'>Tech Stack</div>
                <div className="flex flex-row items-center justify-center mb-10 w-full">
                    <AnimatedTooltip items={people} />
                </div>
                <div>

                </div>
                {/* <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, eaque. Beatae deleniti cupiditate vel error maxime? Id rerum odit fugit suscipit quis minima? Amet delectus dolores quis culpa dolorem nulla rerum tempore consequuntur eius ducimus consequatur a ex soluta perspiciatis veritatis, excepturi est quaerat ipsa aliquid assumenda? A laboriosam quibusdam, ab hic molestias eius fugit delectus consectetur, sunt dolores quis natus, nostrum veniam similique reiciendis adipisci quas iusto! Corporis facere obcaecati totam voluptatem alias repudiandae perferendis dignissimos. Ipsum odio optio corrupti reiciendis, ab, omnis consequuntur ad aliquam iure et cum soluta doloremque totam vero? Minima accusamus alias maxime praesentium expedita sunt. Quam assumenda mollitia quo natus ratione minima at, dolores, voluptate cupiditate temporibus facilis provident dolore eveniet laudantium, doloremque perferendis voluptatibus odio ad. Assumenda perferendis eveniet sit. Tempora, eos voluptatum. Libero praesentium adipisci quia minus inventore modi ullam perferendis delectus laudantium. Placeat ullam similique unde debitis. Facilis iste consequuntur minus harum. Quam sint cupiditate error dolor quos deleniti eaque dolorum perferendis exercitationem et a, ratione quibusdam inventore eligendi, veniam sequi ipsum facilis accusantium esse quisquam molestiae voluptas. Tempore, maxime doloremque vero debitis iure illum nobis libero odio, nesciunt a, veniam nulla numquam iste recusandae ullam ipsa! Quod officiis commodi sint. Nam, neque assumenda consequatur sint culpa aliquid nemo vel, atque quo veniam totam blanditiis, soluta officia quod maiores hic obcaecati unde eius voluptas quaerat? Nemo dolore beatae accusamus eveniet esse illum iure quam, qui minus velit earum sapiente fugiat omnis ea reprehenderit. Qui quis tempore temporibus non doloremque voluptate eligendi ex culpa beatae sapiente vero rerum ratione, debitis, reprehenderit nulla vel consequuntur cumque facilis dolores est nam? Architecto impedit voluptatem maiores qui amet eligendi in, delectus, molestiae porro, harum recusandae quia consequatur provident eius saepe rem temporibus inventore aut quae obcaecati doloremque suscipit omnis animi. Porro laudantium rerum asperiores earum, facilis autem dolor repellat voluptates iusto accusantium vel quibusdam beatae molestias quidem fugit amet doloribus ab animi blanditiis debitis. Ullam earum quibusdam, recusandae adipisci atque voluptate ad sit, harum consectetur expedita nesciunt molestias vitae odio sunt laborum accusantium eum. Ducimus iusto ipsa quo adipisci fugit fuga molestiae iste animi culpa libero corporis saepe incidunt accusantium pariatur, cum rem neque inventore? Culpa, optio corrupti voluptatum provident exercitationem veritatis nam impedit quis quo non animi ab enim deserunt inventore, quaerat rem. Sunt laboriosam obcaecati aperiam quos, voluptatum inventore quaerat debitis doloremque accusamus iste praesentium, maiores illum provident commodi dignissimos. Officia velit corrupti ducimus doloribus dolores nobis quos fugit iste laboriosam magnam ea voluptatum dolorum quis magni voluptatibus neque aliquid voluptates, minus ipsa nisi dolorem provident odio deleniti aperiam! Excepturi odio nihil placeat illo quod dolorum sit itaque ex dolorem, animi ipsam ea. Aperiam ipsam veritatis voluptatibus labore reiciendis a voluptas minima, velit consequatur corporis soluta, iusto quidem nostrum autem, aliquam dignissimos dolores nam expedita obcaecati cum neque! Tempora officiis ullam dolore obcaecati ea consectetur cumque, modi, officia quia unde deserunt alias suscipit veniam adipisci sint aspernatur commodi sunt fugiat deleniti delectus enim, fugit ex corrupti. Ullam beatae minima, ipsum natus ab similique?</div> */}
            </LampContainer>
        </section>
    )
}

export default Section2