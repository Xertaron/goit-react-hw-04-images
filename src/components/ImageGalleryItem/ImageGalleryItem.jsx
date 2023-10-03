import data from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export default function ImageGalleryItem({ smallImgURL, id }) {
  return (
    <li className={data.galleryItem}>
      <img src={smallImgURL} alt={id} />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  smallImgURL: PropTypes.string.isRequired,
};
