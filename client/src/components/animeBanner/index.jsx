import {
    Box, Flex, Button
} from '@chakra-ui/react';

const exampleBanner = 'https://ocdn.eu/pulscms/MDA_/0e185464ef91f6981dbe0ca64e148376.jpeg'
const exampleImage = 'https://fwcdn.pl/fpo/85/13/868513/8133073.10.webp'

export default ({
    name, description, image, banner, hideButton, hideDesc
}) => {
    return (
        <Box className="anime__slide__container" style={{backgroundImage: `url('${banner ? banner : exampleBanner}')`}}>
            <div className="anime__slide__wrapper">
                <img style={{borderRadius: 10}} width={140} src={image ? image : exampleImage} />
                <Flex style={{    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }} flexDir={'column'} justifyContent={!hideButton ? 'space-between' : ''}>
                    <h1 style={{fontSize: '30px'}}>{name ? name : "Deadpool & Wolverine"}</h1>
                    {!hideDesc && 
                    <p style={{maxWidth: 400}}>
                        {description 
                        ? description 
                        : "Wade Wilson zmaga się z kryzysem wieku średniego i obecnie pracuje jako sprzedawca używanych samochodów."}
                    </p>
                    }
                    {!hideButton && <button className='melancholy__button'>Oglądaj</button>}
                </Flex>
            </div>
        </Box>
    )
}