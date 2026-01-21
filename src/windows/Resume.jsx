import WindowWrapper from "#hoc/WindowWrapper.jsx";
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import {WindowControl} from "#components";
import {Download} from "lucide-react";
import { pdfjs, Document,Page  } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;


const Resume = () => {
    return (
        <>
            <div id='window-header'>
                <WindowControl target='resume' />
                <h2>Resume.pdf</h2>

                <a
                    href='files/resume.pdf'
                    download
                    className='cursor-pointer'
                    title='Download resume'
                >
                    <Download className='icon' />
                </a>
            </div>

            <Document file = 'files/resume.pdf'>
                <Page pageNumber={1} renderTextLayer renderAnnotationLayer />
            </Document>
        </>
    )
}


const ResumeWindow = WindowWrapper(Resume, 'resume');

export default ResumeWindow;
