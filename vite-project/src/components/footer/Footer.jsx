import { FooterStyled } from "./Footer.styled"; 

const Footer = () => {
    return (

        <FooterStyled>
            <div>
                <h4>Adresse:</h4>
                <p>Intet nyt - Godt nyt ApS</p>
                <p>Tulipanvej 232</p>
                <p>7320</p>
                <p>Valby Øster</p>
            </div>
            <div>
                <h4>Links</h4>
                <a href="#">vikanweb.dk</a>
                <a href="#">overpådenandenside.dk</a>
                <a href="#">retsinformation.dk</a>
                <a href="#">nogetmednews.dk</a>
            </div>
            <div>
                <h4>Politik</h4>
                <p>Privatlivspolitik</p>
                <p>Cookiepolitik</p>
                <p>Købsinformation</p>
                <p>Delingspolitik</p>
            </div>
            <div>
                <h4>Kontakt</h4>
                <p>ingn@nyhed.dk</p>
                <p>telefon: 23232323</p>
                <p>fax: 123123-333</p>
            </div>
        </FooterStyled>
    )

}

export default Footer;