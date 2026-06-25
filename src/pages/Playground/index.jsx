import Layout from "../../components/Layout";
import { ViewProvider } from "../../contexts/ViewContext";
import { ZPLProvider } from "../../contexts/ZPLContext";
function Playground() {
  return (
    <div>
      <ViewProvider>
        <ZPLProvider>
          <Layout>Em Construção...</Layout>
        </ZPLProvider>
      </ViewProvider>
    </div>
  );
}

export default Playground;
