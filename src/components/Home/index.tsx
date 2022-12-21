import Topbarr from '../Topbar';
import TextoAbout from '../TextoAbout';
import PagesWebs from '../pages';


function Home(){
    return(
    <div>
    {<Topbarr/>}
    {<TextoAbout/>}
    {<PagesWebs/>}
    </div>
);
}

export default Home;