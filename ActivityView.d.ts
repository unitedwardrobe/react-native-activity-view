export interface ActivityViewOptions {
  /* Text you want to share */
  text?: string;
  /* URL you want to share */
  url?: string;
  /* Url of the image you want to share/action */
  imageUrl?: string;
  /* Raw base64 encoded image data */
  imageBase64?: string;
  /* Name of the image in the app bundle */
  image?: string;
  /* Path to file you want to share */
  file?: string;
  /* An array with activities you want to exclude from activity view. */
  exclude?: string[];
  /* Where you want the share popup to point to on iPad */
  anchor?: number | null;
}

declare namespace ActivityView {
  function show(options: ActivityViewOptions): Promise<boolean>;
}

export default ActivityView;
