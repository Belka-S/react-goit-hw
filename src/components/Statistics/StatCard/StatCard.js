import PropTypes from 'prop-types';

import { Label, Percentage } from './StatCard.styled';
import { Icon } from 'components/Statistics/StatCard/Icon';

export const StatCard = ({ item: { label, percentage } }) => (
  <>
    <Label>
      <Icon label={label}></Icon>
      {label}
    </Label>
    <Percentage>{percentage}%</Percentage>
  </>
);

StatCard.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};

// {(() => {
//   switch (label) {
//     case '.docx':
//       return <BsFiletypeDocx size={iconSize.md} />;
//     case '.pdf':
//       return <BsFiletypePdf size={iconSize.md} />;
//     case '.mp3':
//       return <BsFiletypeMp3 size={iconSize.md} />;
//     case '.psd':
//       return <BsFiletypePsd size={iconSize.md} />;
//     case '.xlsx':
//       return <BsFiletypeXlsx size={iconSize.md} />;
//     default:
//       return '-';
//   }
// })()}
