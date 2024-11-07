import {
    Button,
    Container, Input, Text
} from '@chakra-ui/react';
import Navbar from '../../components/navbar';
import { createAnime } from '../../api/anime';
import { useState } from 'react';

export default () => {

    const [animeName, setAnimeName] = useState("");
    const [slug, setSlug] = useState("");
    const [desc, setDesc] = useState("");
    const [tags, setTags] = useState([]);
    const [img, setImg] = useState("");
    const [banner, setBanner] = useState("");
    const [episodeCount, setEpisodeCount] = useState(0);

    const addAnime = () => {
        createAnime({
            title: animeName, banner, desc, img, slug, episodeCount
        });
    }

    return (
        <>
        <Navbar/>
        <Container mt={3}>
            
            <Text>Tytuł</Text>
            <Input value={animeName} onChange={(e) => setAnimeName(e.target.value)} placeholder='Wpisz tytuł...' className='melancholy__search' />

            <Text>Slug</Text>
            <Input value={slug} onChange={(e) => setSlug(e.target.value)} placeholder='Wpisz slug...' className='melancholy__search' />

            <Text>Opis</Text>
            <Input value={desc} onChange={(e) => setDesc(e.target.value)} placeholder='Wpisz opis...' className='melancholy__search' />
            
            <Text>Obrazek</Text>
            <Input value={img} onChange={(e) => setImg(e.target.value)} placeholder='Podaj link do obrazka...' className='melancholy__search' />

            <Text>Banner</Text>
            <Input value={banner} onChange={(e) => setBanner(e.target.value)} placeholder='Podaj link do banneru...' className='melancholy__search' />

            <Text>Liczba Odcinków</Text>
            <Input value={episodeCount} onChange={(e) => setEpisodeCount(e.target.value)} type={'number'} placeholder='Wpisz ilość odcinków...' className='melancholy__search' />

            <Button onClick={addAnime}>Dodaj Film</Button>
        </Container>

        </>
    )
}