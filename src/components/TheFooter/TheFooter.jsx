import { Link } from 'react-router-dom'
import './TheFooter.scss'

export default function TheFooter() {
    return (
        <>
        <footer className="footer">
            
            <div className="footer__container">
                <div className="footer__main">
                    <div className="footer__single">
                        <h4 className="footer__title">about us</h4>
                        <p className="footer__description">
                            Lorem, ipsum dolor sit amet consectetur adipisicing 
                            elit. Ex labore atque, modi, incidunt ea odio voluptas 
                            quod voluptatem, eum iusto dolores vero autem quibusdam 
                            doloremque commodi eveniet culpa reprehenderit facere.
                        </p>
                        <div className="footer__social">
                            <Link to="/" className="">
                                    <i className="fa fa-facebook"></i>
                                </Link>
                            <Link to="/" className="">
                                    <i className="fa fa-facebook"></i>
                                </Link>
                            <Link to="/" className="">
                                    <i className="fa fa-facebook"></i>
                                </Link>
                            <Link to="/" className="">
                                    <i className="fa fa-facebook"></i>
                                </Link>
                        </div>
                    </div>
                    <div className="footer__single">
                        <h4 className="footer__title">main menu</h4>
                        <ul className="footer__list">
                            <li className="footer__listitem">
                                <i className="fa fa-chevron-right"></i><Link href="/"><a className="footer__link">link</a></Link>
                            </li>
                            <li className="footer__listitem">
                                <i className="fa fa-chevron-right"></i><Link href="/"><a className="footer__link">link</a></Link>
                            </li>
                            <li className="footer__listitem">
                                <i className="fa fa-chevron-right"></i><Link href="/"><a className="footer__link">link</a></Link>
                            </li>
                            <li className="footer__listitem">
                                <i className="fa fa-chevron-right"></i><Link href="/"><a className="footer__link">link</a></Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__single">
                        <h4 className="footer__title">Quick links</h4>
                        <ul className="footer__list">
                            <li className="footer__listitem">
                            <i className="fa fa-chevron-right"></i><Link href="/"><a className="footer__link">link</a></Link>
                            </li>
                            <li className="footer__listitem">
                            <i className="fa fa-chevron-right"></i><Link href="/"><a className="footer__link">link</a></Link>
                            </li>
                            <li className="footer__listitem">
                            <i className="fa fa-chevron-right"></i><Link href="/"><a className="footer__link">link</a></Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__single">
                        <h4 className="footer__title">contact us</h4>
                        <ul className="footer__list">
                            <li className="footer__listitem">
                                <i className="fa fa-chevron-right"></i><Link href="/"><a className="footer__link">link</a></Link>
                            </li>
                            <li className="footer__listitem">
                                <i className="fa fa-chevron-right"></i><Link href="/"><a className="footer__link">link</a></Link>
                            </li>
                            <li className="footer__listitem">
                                <i className="fa fa-chevron-right"></i><Link href="/"><a className="footer__link">link</a></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}