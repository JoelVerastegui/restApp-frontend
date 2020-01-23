import React, { Fragment, useState, useEffect } from 'react';
import { primaryColor } from '../../Config/colors';

import BookCard from '../Reusables/BookCard';
import BookCarousel from '../Reusables/BookCarousel';

require('velocity-animate/velocity');

function Dashboard() {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    const [detailMode, setDetailMode] = useState(false);
    const [menuHeight, setMenuHeight] = useState('0px');
    const [isMainPage, setIsMainPage] = useState(false);
    // const [tabWidth, setTabWidth] = useState('350px')
    const [tags, setTags] = useState([]);
    const [chapters, setChapters] = useState([]);
    const [books, setBooks] = useState([]);

    window.addEventListener('resize', () => {
        setInnerWidth(window.innerWidth);

        // const menuBarHeight = window.getComputedStyle(document.getElementById('menuBar')).height;

        if (window.innerWidth < 540) {
            if (menuHeight === '80px') {
                setMenuHeight('70px');
            }
        } else {
            if (menuHeight === '70px') {
                setMenuHeight('80px');
            }
        }
    })

    useEffect(() => {
        setMenuHeight(window.getComputedStyle(document.getElementById('menuBar')).height);
    }, [])

    function showDetail(bool) {
        // document.getElementById('detailTab').velocity({ right: 0 },{ duration: 200 })
        setDetailMode(bool)

        if (bool) {
            setTags(['Acción', 'Drama', 'Aventura', 'Misterio']);

            setChapters(['Capítulo 1 - El renacimiento', 'Capítulo 2 - La locura', 'Capítulo 3 - La inquisición', 'Capítulo 4 - Méritos', 'Capítulo 5 - La guardia', 'Capítulo 6 - La despedida']);
        
            setBooks(['https://picsum.photos/313/500?random=1','https://picsum.photos/313/500?random=2','https://picsum.photos/313/500?random=3','https://picsum.photos/313/500?random=4','https://picsum.photos/313/500?random=5','https://picsum.photos/313/500?random=6',]);
        }
    }

    return (
        <Fragment>
            {/* <div id="detailTab" className="h-100 position-fixed bg-success d-flex flex-column shadow" style={{ width: tabWidth, zIndex: 1100, right: `-${tabWidth}` }}>
                <div className="text-white p-4" style={{ backgroundColor: primaryColor }}>
                    <span className="h2 font-weight-light">El tesoro secreto de Bangkok</span>
                </div>
                <div className="h-100" style={{ backgroundColor: 'snow' }}>

                </div>
                <div style={{ height: '100px', backgroundColor: 'red' }}>

                </div>
            </div> */}
            <div className="d-flex flex-column">
                <div id="menuBar" className={(detailMode ? "justify-content-start" : "justify-content-center") + " w-100 position-fixed d-flex align-items-center text-white shadow"} style={{ backgroundColor: primaryColor, zIndex: 1000 }}>
                    {!detailMode && (
                        <Fragment>
                            <div className={innerWidth < 540 ? '' : "w-25"}></div>
                            <div className={(innerWidth < 540 ? 'w-100 mx-3' : 'w-50') + " d-flex"}>
                                <div className="d-flex justify-content-center align-items-center">
                                    <img src="./assets/filled/search-w.png" alt="search" width={innerWidth < 540 ? "25px" : "30px"} height={innerWidth < 540 ? "25px" : "30px"} />
                                </div>
                                <div className="w-100 d-flex align-items-center p-3">
                                    <input type="text" className={(innerWidth < 540 ? 'form-control' : 'form-control-lg') + " w-100 text-white font-weight-light border-left-0 border-top-0 border-right-0 rounded-0"} placeholder='Buscar...' style={{ backgroundColor: 'transparent', boxShadow: 'none' }} />
                                </div>
                            </div>
                            <div className={innerWidth < 540 ? '' : "w-25"}></div>
                        </Fragment>
                    )}

                    {detailMode && (
                        <img src="./assets/filled/arrow-left-w.png" alt="arrow-left" width={innerWidth <= 640 ? "50px" : "80px"} height={innerWidth <= 640 ? "50px" : "80px"} onClick={() => { showDetail(false) }} style={{ cursor: 'pointer' }} />
                    )}
                </div>

                {!detailMode && (
                    <div className={"d-flex flex-column " + (innerWidth <= 810 ? "" : "mx-1")} style={{ marginTop: menuHeight }}>
                        <div className={"d-flex flex-wrap " + (innerWidth <= 480 ? "justify-content-around" : "justify-content-center")}>
                            <BookCard
                                title='La viuda negra'
                                description='Esta es una sinopsis'
                                img="./assets/default-background.jpg"
                                onClick={() => { showDetail(true) }}
                            />
                            <BookCard
                                title='El caliz celestial'
                                description='Hace mucho tiempo, los dioses de distintos mundos, es por ello que se adentran es una aventura...'
                                img="./assets/default-background.jpg"
                                onClick={() => { showDetail(true) }}
                            />
                            <BookCard
                                title='La lección'
                                description='Listo para aprender nuevas experiencias? Este es un...'
                                img="./assets/default-background.jpg"
                                onClick={() => { showDetail(true) }}
                            />
                            <BookCard
                                title='Elthon John'
                                description='Autobiografía del cantante famoso y reconocido...'
                                img="./assets/default-background.jpg"
                                onClick={() => { showDetail(true) }}
                            />
                            <BookCard
                                title='Los vengadores'
                                description='En el planeta tierra, existen unos seres capaces...'
                                img="./assets/default-background.jpg"
                                onClick={() => { showDetail(true) }}
                            />
                            <BookCard
                                title='El cuarto desconocido'
                                description='Un laberinto, media hora para salir, qué hacer...'
                                img="./assets/default-background.jpg"
                                onClick={() => { showDetail(true) }}
                            />
                        </div>
                    </div>
                )}

                {detailMode && isMainPage && (
                    <div className="d-flex flex-column" style={{ marginTop: (innerWidth <= 640 ? '50px' : menuHeight) }}>
                        <div className="w-100 overflow-hidden d-flex align-items-end"
                            style={{
                                position: 'relative',
                                height: '500px',
                                backgroundImage: 'url(./assets/filled/default-background.jpg)',
                                backgroundAttachment: 'fixed',
                                backgroundRepeat: 'no-repeat',
                                boxShadow: 'inset 0px -20px 40px 0px #000000'
                            }}>
                            <div className="w-100 d-flex justify-content-around align-items-end text-white">
                                <div>
                                    <img src={`https://picsum.photos/450/500`} alt="book" width='210px' height='260px' onError={(e) => { e.target.onError = null; e.target.src = './assets/filled/not-found-v.jpg' }} />
                                </div>
                                <div className="py-3">
                                    <span className="h2 font-weight-light">El tesoro secreto de Bangkok</span>
                                </div>
                                <div className="d-flex justify-content-around align-items-center py-2" style={{ color: primaryColor }}>
                                    <div>
                                        <small className="p-2">20</small>
                                        <img src="./assets/filled/heart.png" alt="heart" width="20px" height="20px" />
                                    </div>
                                    <div>
                                        <small className="p-2">203</small>
                                        <img src="./assets/outlined/views.png" alt="views" width="20px" height="20px" />
                                    </div>
                                    <div>
                                        <small className="p-2">2</small>
                                        <img src="./assets/outlined/chapters.png" alt="chapters" width="20px" height="20px" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut mi a ex dictum porta. Duis id quam ac nisi commodo congue sit amet ut dolor. Nulla nec mi lacinia, mollis ex sit amet, malesuada justo. Nunc pellentesque, nisl vitae auctor rutrum, lectus magna pulvinar nulla, sit amet auctor purus ipsum quis dui. Vivamus felis orci, tempus vel volutpat non, facilisis vel sem. Maecenas scelerisque sodales velit et semper. Morbi aliquam tellus vitae libero laoreet vehicula. Suspendisse nec arcu ut enim tincidunt blandit in vitae mi. Suspendisse tincidunt ipsum id orci lobortis, eget tempor nibh vulputate. Integer placerat massa dui, eu porta lorem tincidunt eu. Nullam sollicitudin condimentum porta. Aliquam quis libero pellentesque nisl aliquet mattis. Suspendisse interdum massa et sapien convallis commodo. Donec efficitur ipsum mi, nec bibendum diam cursus sed.
                            Donec nec lorem nibh. Fusce sit amet scelerisque libero. Nunc tristique, neque quis vehicula vulputate, nulla odio hendrerit quam, quis vehicula mauris mauris nec ex. Donec ac rhoncus ex. Pellentesque et scelerisque dui. Sed vel dictum urna. Vestibulum vestibulum, sem quis ultrices lacinia, quam nunc interdum nibh, non vehicula dolor velit vel ipsum. Vivamus ut tellus sed tellus auctor commodo. Suspendisse ullamcorper accumsan condimentum. Nullam at ligula quam. In facilisis velit id tincidunt semper. Proin semper vulputate tortor, ut maximus nulla iaculis quis. Quisque hendrerit tincidunt turpis non suscipit. Pellentesque ut sodales enim. Mauris posuere nisl in urna molestie tempor.
                            Aliquam lectus nisi, accumsan eget sapien sed, sollicitudin aliquam ex. Nunc dignissim non dui in blandit. Donec eget nibh viverra, bibendum lorem ac, tristique magna. Curabitur imperdiet erat a turpis commodo pulvinar. Mauris sem ipsum, finibus vitae efficitur vitae, tempus nec sem. Sed vel enim sollicitudin, malesuada nibh pretium, egestas est. Donec vel dignissim purus. Fusce lobortis augue sed orci laoreet laoreet.
                            Pellentesque ac eleifend neque. Maecenas sit amet tortor a nunc posuere venenatis finibus sed eros. Vivamus lobortis est vitae sapien suscipit, eu dapibus orci egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin tincidunt tortor a libero rutrum dignissim. Etiam sagittis, metus quis varius auctor, lacus arcu sagittis libero, quis rhoncus odio augue a nisl. Etiam eu massa et eros imperdiet luctus. Nunc viverra turpis id augue suscipit, eu interdum ipsum vestibulum. Ut scelerisque nunc non mattis iaculis.
                            Phasellus velit lorem, iaculis et facilisis sit amet, auctor eget dolor. Cras vitae ultricies ex. Maecenas eu nisl sed mauris scelerisque vehicula. Mauris viverra ipsum at pellentesque iaculis. Morbi velit tellus, interdum ut finibus ac, aliquet ut turpis. Integer nec urna eget libero tincidunt rutrum eget id ligula. Morbi nec elit a libero suscipit accumsan vel at libero. Sed porta non neque quis elementum. Nam pulvinar vitae felis ac semper. Etiam sit amet nisl pulvinar, vehicula ante eget, tempus elit. Quisque ornare venenatis orci, vel venenatis nibh gravida vel. Duis pharetra lacinia tellus, ut suscipit ligula fringilla ac. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc ut lacus vitae libero placerat venenatis vel ac est. Nunc felis enim, facilisis quis accumsan eu, fermentum vel ex. Nam commodo non nulla eu dignissim.
                        </div>
                    </div>
                )}

                {detailMode && !isMainPage && (
                    <div className="d-flex flex-column" style={{ marginTop: (innerWidth <= 640 ? '50px' : menuHeight) }}>
                        <div className={"w-100 d-flex " + (innerWidth <= 610 ? "justify-content-center" : "")} style={{ height: '500px', backgroundColor: '#000000' }}>
                            {innerWidth > 610 && (
                                <div className={"w-75 text-white d-flex flex-column " + (innerWidth <= 810 ? "justify-content-end " : "justify-content-between ") + (innerWidth <= 960 ? "p-4" : "p-5")}>
                                    <div className="d-flex flex-column">
                                        <h2 className="h2">Ethernal Spirits: La flama eterna</h2>
                                        {innerWidth > 810 && (
                                            <span className="font-weight-light py-3 overflow-auto" style={{ maxHeight: '200px' }}>
                                                Luego de la lucha contra los Zorgons, Flynn y sus amigos se fueron en busca de la siguiente reliquia,
                                                la flama eterna, que tenía el poder de 1000 demonios en su interior, y aquel que lo posea, tendrá un
                                                poder absoluto. Sin embargo, Fragma, el capitán de los malditos del Puerto Hereje, tiene el mismo
                                                objetivo y hará todo lo posible para llegar antes que la tropa de Flynn.
                                                Ésta es una carrera contra el tiempo, ¿Quién llegará antes que el otro...?
                                        </span>
                                        )}
                                        <div className="d-flex flex-wrap">
                                            {tags.length && tags.map((tag) => {
                                                return <div className="badge badge-pill badge-dark shadow m-1">{tag}</div>
                                            })}
                                        </div>
                                    </div>
                                    <div className={"d-flex " + (innerWidth <= 970 ? "flex-column" : "justify-content-between align-items-center")}>
                                        <div className={innerWidth <= 970 ? "py-3" : ""}>
                                            <img src="./assets/filled/user-w.png" alt="avatar" className="rounded-circle" width="40px" height="40px" />
                                            <span className="px-3">John Escobar M.</span>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <div className={"d-flex align-items-center " + (innerWidth <= 970 ? "" : "px-2")}>
                                                <span className="p-2" style={{ fontSize: '20px' }}>20</span>
                                                <img src="./assets/filled/heart-w.png" alt="heart" width="30px" height="30px" />
                                            </div>
                                            <div className={"d-flex align-items-center " + (innerWidth <= 970 ? "" : "px-2")}>
                                                <span className="p-2" style={{ fontSize: '20px' }}>203</span>
                                                <img src="./assets/outlined/views-w.png" alt="views" width="30px" height="30px" />
                                            </div>
                                            <div className={"d-flex align-items-center " + (innerWidth <= 970 ? "" : "px-2")}>
                                                <span className="p-2" style={{ fontSize: '20px' }}>2</span>
                                                <img src="./assets/outlined/chapters-w.png" alt="chapters" width="30px" height="30px" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div className="w-25 mx-5 d-flex align-items-end" style={{ width: '312.5px', minWidth: '312.5px', height: '100%', backgroundImage: 'url(https://picsum.photos/313/500)', backgroundRepeat: 'no-repeat', boxShadow: (innerWidth <= 610 ? 'none' : 'inset 0px 0px 10px 12px #000000') }}>
                                {innerWidth <= 610 && (
                                    <div className="text-white" style={{ backgroundColor: '#000000b3', boxShadow: '0px -10px 8px 8px #000000b3' }}>
                                        <h2 className="h2">Ethernal Spirits: La flama eterna</h2>
                                    </div>
                                )}
                            </div>
                        </div>
                        {innerWidth <= 610 && (
                            <div className={"d-flex px-5 py-3 " + (innerWidth <= 450 ? "flex-column align-items-start" : "justify-content-between align-items-center")}>
                                <div className={'d-flex align-items-center '} >
                                    <img src="./assets/filled/user-w.png" alt="avatar" className="rounded-circle" width="40px" height="40px" style={{ backgroundColor: primaryColor }} />
                                    <span className="px-3">John Escobar M.</span>
                                </div>
                                <div className={"d-flex justify-content-between " + (innerWidth <= 450 ? "mt-2" : "")}>
                                    <div className={"d-flex align-items-center " + (innerWidth <= 970 ? "" : "px-2")}>
                                        <span className="p-2" style={{ fontSize: (innerWidth <= 610 ? '16px' : '20px') }}>20</span>
                                        <img src="./assets/filled/heart.png" alt="heart" width={innerWidth <= 610 ? "20px" : "30px"} height={innerWidth <= 610 ? "20px" : "30px"} />
                                    </div>
                                    <div className={"d-flex align-items-center " + (innerWidth <= 970 ? "" : "px-2")}>
                                        <span className="p-2" style={{ fontSize: (innerWidth <= 610 ? '16px' : '20px') }}>203</span>
                                        <img src="./assets/outlined/views.png" alt="views" width={innerWidth <= 610 ? "20px" : "30px"} height={innerWidth <= 610 ? "20px" : "30px"} />
                                    </div>
                                </div>
                            </div>
                        )}

                        {innerWidth <= 810 && (
                            <div className="w-100 px-5">
                                <p className="font-weight-light text-justify m-0">
                                    Luego de la lucha contra los Zorgons, Flynn y sus amigos se fueron en busca de la siguiente reliquia,
                                    la flama eterna, que tenía el poder de 1000 demonios en su interior, y aquel que lo posea, tendrá un
                                    poder absoluto. Sin embargo, Fragma, el capitán de los malditos del Puerto Hereje, tiene el mismo
                                    objetivo y hará todo lo posible para llegar antes que la tropa de Flynn.
                                    Ésta es una carrera contra el tiempo, ¿Quién llegará antes que el otro...?
                                </p>
                            </div>
                        )}

                        {innerWidth <= 610 && (
                            <div className="d-flex flex-wrap px-5 py-3">
                                {tags.length && tags.map((tag) => {
                                    return <div className="badge badge-pill badge-dark m-1">{tag}</div>
                                })}
                            </div>
                        )}

                        <div className="d-flex my-4 flex-wrap">
                            <div className={"flex-grow-1 shadow mx-2 p-3 " + (innerWidth <= 1082 ? "w-100" : "")} style={{ minHeight: '200px' }}>
                                <span className="h4">Capitulos</span>
                                <div className="list-group list-group-flush mt-3" style={{ cursor: 'pointer' }}>
                                    {chapters.length && chapters.map((f) => {
                                        return <div className="list-group-item list-group-item-action">{f}</div>
                                    })}
                                </div>
                            </div>
                            <div className={"shadow mx-2 h4 p-3 " + (innerWidth <= 1082 ? "mt-4 " : "") + (innerWidth <= 470 ? "w-100" : "")} style={{ width: '450px', minHeight: '200px' }}>
                                <span className="h4 mb-3">Obras del autor</span>
                                <BookCarousel books={books} />
                            </div>
                        </div>
                    </div>
                )}

            </div>

        </Fragment>
    )
}

export default Dashboard;