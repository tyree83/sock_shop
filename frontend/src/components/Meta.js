import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome To Wright Moving Company',
  description:
    'Here you can book your move, schedule an estimate, buy your moving/packing supplies, or just shop for some cute furniture and home decor! We offer a full array of new and used moving boxes and packing supplies, as well as beautiful home furnishings for a great price!',
  keywords:
    'moving supplies, packing supplies, moving, moving company, furniture, moving boxes, home furnishing, mover, moving',
};

export default Meta;
