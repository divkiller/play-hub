import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';

const GameCardSkeleton = () => {
    return (
        <Card width="436px" borderRadius={10} overflow="hidden">
            <Skeleton height="384px" />
            <CardBody>
                <SkeletonText /> 
            </CardBody>
        </Card>
    );
};

export default GameCardSkeleton;
