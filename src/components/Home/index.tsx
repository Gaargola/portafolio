import Topbarr from '../Topbar';
import TextoAbout from '../TextoAbout';
import PagesWebs from '../pages';
import Piepag from '../Piepag';

function Home(){
    return(
    <div>
    {<Topbarr/>}
    {<TextoAbout/>}
    {<PagesWebs/>}
    {<Piepag/>}
    </div>
);
}

export default Home;