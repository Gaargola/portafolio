import { H1, Div, Img } from "./style";


function PagesWebs() {
    return (
        <div>
            <H1>Mis Paginas y o Proyectos</H1>
            <Div>
                <a href="https://gargola-contador-web.netlify.app/"><Img src={"/img/pag1.png"} alt="" /></a>
                <a href="https://gargolastore.netlify.app/"><Img src={"/img/pag2.png"} alt="" /></a>
                <a href="https://punchint.netlify.app/"><Img src={"/img/pag3.png"} alt="" /></a>
                <a href="https://gamemousev1.netlify.app/"><Img src={"/img/pag4.png"} alt="" /></a>
                <a href="https://gamekeyv2.netlify.app/"><Img src={"/img/pag5.png"} alt="" /></a>
            </Div>
        </div>
    );
}

export default PagesWebs;