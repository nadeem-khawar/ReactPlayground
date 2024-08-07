import { useState } from 'react';
import { Button } from '../components/catalyst/button';

const getRandomAnimal = () => {
    const animals = ['dog', 'cat', 'bird', 'fish', 'rabbit', 'hamster', 'horse'];
    const randomIndex = Math.floor(Math.random() * animals.length);
    return animals[randomIndex];
};

export default function AnimalShow() {
    const [animal, setAnimal] = useState<string[]>([]);
    const handleAddAnimal = () => {
        setAnimal([...animal, getRandomAnimal()]);
    };
    return (
        <div>
            <h1>Animal Show</h1>
            <Button onClick={handleAddAnimal}>Add animal</Button>
            {animal.map((animal, index) => (
                <Animal key={index} animal={animal} />
            ))}
        </div>
    );
}

function Animal({ animal }: { animal: string }) {
    const [likes, setLikes] = useState<number>(0);
    const handleLike = () => {
        setLikes(likes + 1);
    };
    return (
        <Button onClick={handleLike}>
            {animal}:{likes}
        </Button>
    );
}
