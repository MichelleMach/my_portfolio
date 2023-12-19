import { useEffect, useState } from 'react';
import moment from 'moment';
import * as C from '../layout/MediumContainer'

const Blog = () => {

    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@machado.profile');
                const data = await res.json();
                const items = data.items;
                setItems(items);

            } catch {
                setError(true);
            }
        }

        fetchData();
    }, []);

    return (
        <section
            id="blog"
            data-nav-tooltip="Blog"
            className="pp-section pp-scrollable section dark-bg">
            <div>
                <section className="container">
                    <div className="title">
                        <h3 id="blog">My Medium.</h3>
                    </div>
                    <C.ArticlePosts>
                        {items.map((item, index) => (
                            <C.PostContainer key={index}>
                                <span>{moment(item.pubDate).format('DD/MM/YYYY')}</span>
                                <a href={item.link} >
                                    <C.TitlePost>{item.title}</C.TitlePost>
                                </a>
                            </C.PostContainer>
                        ))}

                        <C.ButtonMedium className='px-btn px-btn-theme' href={"https://medium.com/@machado.profile"}>
                            Veja mais
                        </C.ButtonMedium>
                    </C.ArticlePosts>
                </section>
            </div>
        </section>
    );
};
export default Blog;