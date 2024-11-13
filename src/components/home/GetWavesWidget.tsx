import { Card, CardHeader, CardDescription, CardContent } from "@/components";

interface Props {
    labelKo: string;
    labelEn: string;
    imgUrl: string;
    value: number;
    unit: string;
}

function GetWavesWidget({ labelKo, labelEn, imgUrl, value, unit }: Props) {
    return (
        <Card className="w-full h-fit bg-neutral-50">
            <CardHeader>
                <CardDescription className="font-semibold text-neutral-700">
                    {labelKo}
                    <span className="text-neutral-400 font-normal ml-1">{labelEn}</span>
                </CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
                <img src={imgUrl} alt="" className="h-10 w-10" />
                <p className="poppins-medium scroll-m-20 text-3xl font-semibold tracking-tight">
                    {value}
                    <span className="text-lg ml-1">{unit}</span>
                </p>
            </CardContent>
        </Card>
    );
}

export { GetWavesWidget };
