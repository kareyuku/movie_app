import { Button, Text, Textarea, useToast } from "@chakra-ui/react";
import { rateAnime } from "../api/anime";
import { useRef, useState } from "react";
import ReactStars from "react-stars";

import { useSearchParams } from "react-router-dom";

export default function ReviewInput({ movieId }) {

    const [searchParams, setSearchParams] = useSearchParams()


    const toast = useToast({
        isClosable: true,
        duration: 3000,
        position: "top-right",
      });

    const contentRef = useRef(null);
    const [rating, setRating] = useState(1);

    const submitReview = async () => {
        const response = await rateAnime({ animeId: movieId, rate: rating, content: contentRef?.current?.value || "" })     
        if(response?.err) {
            toast({ description: "Już dałeś recenzje temu filmowi", status: "error" });
        } else {
            setSearchParams(`?${new URLSearchParams({ reviews: '' })}`)
            window.location.reload();
        }
    }

    const ratingChanged = (newRating) => setRating(newRating);

    return <div>
        <Text mb={3}>Podziel się swoją opinią:</Text>
        <div 
        style={{
            background: "#252f49", width: "fit-content", borderRadius: "10px", 
            padding: "5px 2rem", marginBottom: "10px"
        }}>
            <ReactStars 
            count={5} size={24} onChange={ratingChanged} 
            value={rating} color1="#131624" color2="#ec4882" 
            half={false}
            />
        </div>
        <Textarea ref={contentRef} placeholder="Treść recenzji..." bg={"#252f49"} border={"none"} />
        <Button onClick={() => submitReview()} style={{background: "#252f49"}} mt={3} >Prześlij!</Button>
    </div>
}