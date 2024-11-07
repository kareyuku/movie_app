import { Avatar, Flex, Text } from '@chakra-ui/react';
import {FaStar} from 'react-icons/fa';
import './review.css';
import ReviewInput from '../../../../components/ReviewInput';

const ReviewCard = ({
    username, text, rate
}) => {
    return (
        <Flex bg={'#252f49'} borderRadius={'10px'} p={5} gap={3}>
            <Avatar h={'64px'} w={'64px'} />
            <Flex flexDir={'column'}>
                <Text>{username}</Text>
                <Flex gap={.5} mb={3} p={0}>
                    <FaStar color={rate >= 1 ? '#EC4882' : '#131624'}/>
                    <FaStar color={rate >= 2 ? '#EC4882' : '#131624'}/>
                    <FaStar color={rate >= 3 ? '#EC4882' : '#131624'}/>
                    <FaStar color={rate >= 4 ? '#EC4882' : '#131624'}/>
                    <FaStar color={rate >= 5 ? '#EC4882' : '#131624'}/>
                </Flex>
                <Text>{text}</Text>
            </Flex>
        </Flex>
    )
}

export default ({ reviews, movieId }) => {

    return (
        <Flex gap={5} flexDir={'column'}>

            <ReviewInput movieId={movieId} />

            {reviews.length > 0 && reviews.map(review => (
                <ReviewCard
                username={review.addedBy.username}
                text={review.content}
                rate={review.rate}
                />
            ))}

            {
                <ReviewCard
                username={'Adam'}
                text={"Straszne badziewie!!!"}
                rate={2}
                />
                
            }
            <ReviewCard
            username={'bartus'}
            text={"Bardzo super film, polecam!!!"}
            rate={4}
            />
        </Flex>
    )    
}