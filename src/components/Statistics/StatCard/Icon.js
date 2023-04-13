import {
  BsFiletypeDocx,
  BsFiletypePdf,
  BsFiletypeMp3,
  BsFiletypePsd,
  BsFiletypeXlsx,
} from 'react-icons/bs';
import { RiFileUnknowLine } from 'react-icons/ri';

import { iconSize } from 'utils/const';

export const Icon = ({ label }) => {
  switch (label) {
    case '.docx':
      return <BsFiletypeDocx size={iconSize.md} />;
    case '.pdf':
      return <BsFiletypePdf size={iconSize.md} />;
    case '.mp3':
      return <BsFiletypeMp3 size={iconSize.md} />;
    case '.psd':
      return <BsFiletypePsd size={iconSize.md} />;
    case '.xlsx':
      return <BsFiletypeXlsx size={iconSize.md} />;
    default:
      return <RiFileUnknowLine size={iconSize.md} />;
  }
};
