import { P, Div, Span, Huno, A } from './style';

function TextoAbout() {
    return (
        <Div>
            <Span>
                <Huno>¡Hola! Soy Mauro Borda</Huno>
            </Span>
            <P>
                Tengo 24 años, llevo años en el mundo de la Tecnologia, soy <strong>Full Stack Software Developer</strong>, como informático me encanta escribir código, en especial con JavaScript/TypeScript.
                En el mundo de la Programacion y siendo Desarrollador Web con 2 años de experiencia.
            </P>
            <P>
                Haciendo proyectos Webs, desde paginas simples hasta paginas mas complejas con
                databases, Back End y Front End.
                Buscando asegurar un rol de FullStack developer en un entorno técnicamente desafiante, donde pueda contribuir y mejorar tanto a la empresa si es que lo requiere y a mi.
            </P>
            <P>
                <strong> Para ver el codigo de mis proyectos, ingresa a mi <A href="https://github.com/Gaargola">Github</A></strong>
            </P>
        </Div>
    );
}

export default TextoAbout;