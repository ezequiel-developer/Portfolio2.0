import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Ícones de setas
import { FiCode } from 'react-icons/fi'; // Ícone de código
import { AiOutlineEye } from 'react-icons/ai'; // Ícone de olho

const Projetos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [

    {
      title: 'Finanças (em desenvolvimento)',
      techs: ['ReactJS', 'TailwindCSS'],
      content: ' O projeto é uma aplicação dedicada ao registro de receitas, despesas e orçamentos, com a capacidade de gerar relatórios detalhados para uma empresa de serviços náuticos. Atualmente, os dados são armazenados no localStorage, o que permite uma experiência de uso contínua sem a necessidade de backend imediato. No entanto, tenho planos de integrar um banco de dados no futuro para uma gestão ainda mais robusta e adicionar recursos avançados como filtros dinâmicos.',
      image: './projeto-financas.jpg',
      codeLink: 'https://github.com/ezequiel-developer/ProjetoFinancasReactJS',
      siteLink: 'https://ezequiel-developer.github.io/ProjetoFinancasReactJS/'
    },
    {
      title: 'Landing Page Hamburgueria',
      techs: ['HTML', 'TailwindCSS', 'Javascript'],
      content: 'Este projeto fictício foi criado para aprimorar minhas habilidades em desenvolvimento web, abordando conceitos-chave como manipulação do DOM, estruturação de layouts e interatividade. A página exibe a aplicação prática de técnicas para criar interfaces dinâmicas e responsivas, permitindo a interação com o usuário de maneira fluida.',
      image: './projeto-landing-page-hamburgueria.jpg',
      codeLink: 'https://github.com/ezequiel-developer/LandingPageHamburgueria',
      siteLink: 'https://ezequiel-developer.github.io/LandingPageHamburgueria/'
    },
    {
      title: 'Carrinho de Compras',
      techs: ['HTML', 'TailwindCSS', 'Javascript', 'API ViaCEP', 'API WhatsApp'],
      content: 'Desenvolvido com a metodologia mobile first, Integrei a API ViaCEP para busca automática do endereço pelo CEP, proporcionando uma experiência de compra ágil e eficiente. Além disso, adicionei também a API do WhatsApp para facilitar o envio de mensagens com os detalhes do pedido diretamente ao vendedor. ',
      image: 'projeto-carrinho-de-compras-hamburgueria.jpg',
      codeLink: 'https://github.com/ezequiel-developer/CarrinhoDeComprasJS',
      siteLink: 'https://ezequiel-developer.github.io/CarrinhoDeComprasJS/'
    },
    {
      title: 'App Previsão do Tempo',
      techs: ['HTML', 'CSS', 'Javascript', 'API OpenWeather'],
      content: 'Desenvolvido completamente do zero, sem o uso de frameworks ou bibliotecas externas. O aplicativo consome a API do OpenWeatherMap, garantindo informações precisas e atualizadas sobre o clima em qualquer lugar do mundo. Além disso, ele utiliza a geolocalização do usuário para fornecer previsões personalizadas com base na sua localização atual.',
      image: './projeto-previsao-do-tempo.jpg',
      codeLink: 'https://github.com/ezequiel-developer/Projeto-previsao-do-tempo-JS',
      siteLink: 'https://ezequiel-developer.github.io/Projeto-previsao-do-tempo-JS/'
    },
    {
      title: 'Portfolio 1.0',
      techs: ['HTML', 'CSS', 'Javascript'],
      content: 'Desenvolvido com HTML, CSS e JavaScript Vanilla, (sem depender de frameworks ou bibliotecas externas). Seguindo a metodologia Mobile First, priorizei a acessibilidade e a fluidez da navegação em todos os dispositivos, garantindo uma experiência consistente e agradável para todos os usuários.',
      image: './projeto-portfolio1.jpg',
      codeLink: 'https://github.com/ezequiel-developer/portfolio1.0/settings/pages',
      siteLink: 'https://ezequiel-developer.github.io/portfolio1.0//'
    },
    {
      title: 'CineExplorer Filmes / Séries (em desenvolvimento)',
      techs: ['ReactJS', 'TailwindCSS', 'API TMDb'],
      content: 'Desenvolvido com ReactJS e TailwindCSS, utilizando a API do TMDB para oferecer uma navegação completa pelo universo dos filmes e séries. Através da plataforma, é possível acessar informações detalhadas de cada filme, incluindo elenco, sinopse, avaliações e muito mais. O design responsivo e intuitivo torna a experiência de explorar o catálogo de filmes simples e agradável.',
      image: './projeto-filmes.jpg',
      codeLink: 'https://github.com/ezequiel-developer/ProjetoFilmesReactJS',
      siteLink: 'https://ezequiel-developer.github.io/ProjetoFilmesReactJS/'
    }

  ];

  const handleSwipe = (direction) => {
    if (direction === 'Left') {
      setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, cards.length - 1));
    } else if (direction === 'Right') {
      setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe('Left'),
    onSwipedRight: () => handleSwipe('Right'),
  });

  return (

    <section className='py-20' id='projetos'>

      <h2 className='text-white uppercase font-bold text-2xl text-center mb-8'>Projetos</h2>
      <div className="mx-4 md:w-[80%] md:m-auto relative overflow-hidden  shadow-black shadow-md ">

        {/* Contêiner relativo para manter as setas fixas */}
        <div className="relative">
          {/* Setas de navegação */}
          <div className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10">
            <button
              onClick={() => handleSwipe('Right')}
              className="text-white"
            >
              <FaChevronLeft size={30} />
            </button>
          </div>

          <div className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10">
            <button
              onClick={() => handleSwipe('Left')}
              className="text-white"
            >
              <FaChevronRight size={30} />
            </button>
          </div>

          <div
            {...handlers}
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0  px-4 py-10 md:px-16  bg-[#151515] rounded-lg shadow-lg flex flex-col md:flex-row "
              >

                <div className='flex flex-col md:flex-row gap-4'>

                  <div className='md:w-[40%] h-[380px] md:h-[300px] justify-center flex'>
                  <img
                    src={card.image}
                    alt={card.title}
                    className='h-full w-[250px] object-cover  rounded-xl'
                  />

                  </div>



                  <div className=" mt-4 md:mt-0 flex flex-col justify-between flex-grow md:w-[60%]">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-center md:text-left text-white">
                        {card.title}
                      </h3>
                      <p className="text-gray-300 text-justify text-sm">
                        {card.content}
                      </p>
                      <div className="flex flex-wrap justify-center md:justify-start space-x-2 mt-4">
                        {card.techs.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-black text-sm text-white px-4 mb-2 py-1 rounded-full"
                          >
                            {tech}
                          </span>


                        ))}
                      </div>
                    </div>

                    {/* Botões Ver Código e Ver Site fixados na parte inferior */}
                    <div className="flex justify-center gap-12 space-x-4 mt-6">
                      <a href={card.codeLink} target="_blank" rel="noopener noreferrer">

                        <button className="flex flex-col items-center text-white text-sm">
                          <FiCode size={30} />
                          Repositório
                        </button>
                      </a>


                      <a href={card.siteLink} target="_blank" rel="noopener noreferrer">
                        <button className="flex flex-col items-center text-white text-sm">
                          <AiOutlineEye size={30} />
                          Ver Projeto
                        </button>
                      </a>
                    </div>

                  </div>

                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Indicadores de navegação */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 py-2">
          {cards.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </section>

  );
};

export default Projetos;
