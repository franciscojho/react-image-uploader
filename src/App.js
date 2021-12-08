import { ImageUploaderApp } from "./components/ImageUploaderApp";
import ContextUploader from "./context/ContextUploader";

const App = () => {
  return (
    <ContextUploader  className="uploader">
        <ImageUploaderApp />
    </ContextUploader>
  );
}

export default App;
