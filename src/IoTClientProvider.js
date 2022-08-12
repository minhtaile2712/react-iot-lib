import IoTClientContext from "./IoTClientContext";

function IoTClientProvider({ client, children }) {
  return (
    <IoTClientContext.Provider value={client}>
      {children}
    </IoTClientContext.Provider>
  );
}

export default IoTClientProvider;
