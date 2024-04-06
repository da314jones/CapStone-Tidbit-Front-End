

if (!user_id) {
    console.error("Firebase UID is not available.");
  }
  console.log("Submitting metaDataObject:", video);
  const metaDataObject = {
    user_id,
    ...video,
    archive_id: archiveId,
  };
  console.log("metaDataObject with archiveId:", metaDataObject);
  