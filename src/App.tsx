import { useState } from "react";
import "./App.css";
import type { Slang } from "./Slang";
import slang_json from "./slang.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Undo2 } from "lucide-react";

function App() {
  const slangs = slang_json as Slang[];

  const [randomSlangs] = useState(() =>
    [...(slang_json as Slang[])].sort(() => Math.random() - 0.5),
  );
  const [card, setCard] = useState<number>(0);
  const [showSolution, setShowSolution] = useState<boolean>(false);
  return (
    <div className="gap-3 font-mono flex flex-col items-center justify-center">
      <p className="text-3xl font-semibold p-3">Welcome to Slang DB</p>
      <p className="text-2xl">Word-List</p>
      <div className="w-full">
        {slangs.map((slang) => (
          <Accordion className="pr-5 pl-5">
            <AccordionItem>
              <AccordionTrigger>
                <p className="font-bold text-lg">{slang.word}</p>
              </AccordionTrigger>
              <AccordionContent className="text-wrap">
                <div className="mb-2 text-lg">{slang.definition}</div>
                <div>Samples:</div>
                {slang.samples.map((sample) => (
                  <div className="text-xs">{sample}</div>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
      <div className="w-90 mb-10 mt-10">
        <Card>
          {showSolution ? (
            <>
              <CardHeader className="text-center">Solution</CardHeader>
              <CardContent className="text-center">
                <div className="mb-4 text-lg">
                  {randomSlangs[card].definition}
                </div>
                <div>Samples:</div>
                {randomSlangs[card].samples.map((sample) => (
                  <>
                    <div className="text-xs pb-1">{sample}</div>
                  </>
                ))}
              </CardContent>
            </>
          ) : (
            <>
              <CardHeader className="text-center">Word</CardHeader>
              <CardContent className="text-lg text-center">
                {randomSlangs[card].word}
              </CardContent>
            </>
          )}
          <CardFooter className="flex justify-between items-center">
            <ArrowLeft color={card > 0 ? "white" : "gray"}
              onClick={() => {
                if (card > 0) {
                  setCard(card - 1);
                  setShowSolution(false)
                }
              }}
            />
            <Undo2 onClick={() => setShowSolution(!showSolution)} />
            <ArrowRight
              color={card < randomSlangs.length - 1 ? "white" : "gray"}
              onClick={() => {
                if (card < randomSlangs.length - 1) {
                  setCard(card + 1);
                  setShowSolution(false)
                }
              }}
            />
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default App;
