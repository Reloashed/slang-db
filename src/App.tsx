import './App.css'
import type { Slang } from './Slang'
import slang_json from './slang.json'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

function App() {
  let slangs = slang_json as Slang[]
  return (
    <div className="gap-3 font-mono flex flex-col items-center justify-center">
      <p className="text-3xl font-semibold p-3">Welcome to Slang DB</p>
      <p className='text-2xl'>Word-List</p>
      <div className='w-full'>
        {slangs.map(slang => (
          <Accordion className="pr-5 pl-5">
            <AccordionItem value={slang.word.trim}>
              <AccordionTrigger><p className='font-bold text-lg'>{slang.word}</p></AccordionTrigger>
              <AccordionContent className="text-wrap">
                <div className='mb-2 text-lg'>
                  {slang.definition}
                </div>
                <div>Samples:</div>
                { slang.samples.map(sample => (
                  <div className='text-xs'>{sample}</div>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  )
}

export default App
