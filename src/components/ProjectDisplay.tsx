import Image from "next/image";
import colorGenerator from "/assets/images/projects/color-generator.png";
import ticTacToe from "/assets/images/projects/tic-tac-toe.png";
import passwordGenerator from "/assets/images/projects/password-generator.png";
import portfolio from "/assets/images/projects/portfolio.webp";

export default function ProjectDisplay() {
    const projInfos = {
        titles: [
            "Gerador de cores",
            "Jogo da velha",
            "Gerador de senhas",
            "Portfolio"
        ],
        descriptions: [
            "Este projeto gera cores aleatórias em RGB e as converte para outros códigos de cores, basta apenas clicar no botão.",
            "Um jogo que é aberto no terminal. Escolha X ou O e onde deseja colocar. Divirta-se. :)",
            "Um simples gerador de senhas. As senhas são geradas com 15 caracteres por padrão mas o comprimento pode ser ajustado no código. Todas as senhas são armazenadas no arquivo .txt, caso precise consultá-las depois.",
            "E por último mas não menos importante, esta página de portfólio em que você está agora. :)"
        ],
        imagePaths: [
            colorGenerator,
            ticTacToe,
            passwordGenerator,
            portfolio
        ],
        projectLinks: [
            "https://github.com/svxezm/color-generator",
            "https://github.com/svxezm/tic-tac-toe",
            "https://github.com/svxezm/password-generator",
            "https://github.com/svxezm/portfolio"
        ], 
        deployedLinks: [
            "https://color-generator-gqnc8z0th-igor-borges-projects-6e496d8b.vercel.app",
            "https://replit.com/join/yoieqhxyag-igorbkuhl",
            "https://replit.com/join/lgjoasfsjg-igorbkuhl",
            "#"
        ]
    }

    const { titles, descriptions, imagePaths, projectLinks, deployedLinks } = projInfos;

    return (
        <section className="w-full mx-auto lg:w-[50em]">
            <h3 className="pb-3">Projetos</h3>
            {titles.map((title, index) => (
                <div
                    key={index}
                    className="bg-[#f3d0fb40] w-full rounded-md p-4 mb-4 drop-shadow-lg"
                >
                    <div className="border-b border-b-[#450f57] mb-3 flex justify-between">
                        <h4>{title}</h4>
                    </div>
                    <div className="flex flex-col lg:flex-row">
                        <Image
                            src={imagePaths[index]}
                            alt={titles[index]}
                            title={titles[index]}
                            quality={100}
                            unoptimized
                            className="h-full w-full lg:h-[300px] lg:w-[390px]"
                        />
                        <div className="p-3">
                            <p>{descriptions[index]}</p>
                            <p>
                                Este projeto pode ser acessado por
                                <a
                                    href={deployedLinks[index]}
                                    target="_blank"
                                    className="hover:text-[#4c1048]"
                                >
                                    &nbsp;aqui
                                </a>.
                            </p>
                            <a
                                href={projectLinks[index]}
                                target="_blank"
                                className="underline hover:text-[#4c1048]"
                            >
                                Repositório do projeto.
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}
