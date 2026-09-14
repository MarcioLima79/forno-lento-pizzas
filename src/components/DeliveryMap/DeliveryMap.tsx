import "./DeliveryMap.css";

const googleMapsUrl =
  "https://www.google.com/maps?q=Pelotas%2C%20RS&output=embed";

function DeliveryMap() {
  return (
    <iframe
      className="delivery-map"
      src={googleMapsUrl}
      title="Localização da Forno & Massa em Pelotas"
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}

export default DeliveryMap;
