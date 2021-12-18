//service to intialize the buttons
export default function getButtonOptions({ type, styles }) {
  switch (type) {
    case 0: {
      return {
        text: "Register Bike",
        class: styles.btn_submit,
      };
    }
    case 1: {
      return {
        text: "Cancel rent",
        class: styles.btn_cancel,
      };
    }
    case 2: {
      return {
        text: "Rent",
        class: styles.btn_rent,
      };
    }
    case 3: {
      return {
        text: "Delete",
        class: styles.btn_delete,
      };
    }
    case 4: {
      return {
        text: "Cancel",
        class: styles.btn_cancel,
      };
    }
    default: {
      return null;
    }
  }
}
