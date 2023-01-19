/**
 * Creates a user runtime/sandbox that monitors a users code, and kills the process is necessary
 */
const Runtime = async (sandbox: any) => {
  // Catch unhandled promise rejections
  process.on('unhandledRejection', (err) => {
    console.error('[RUNTIME] Unhandled Rejection found!:');
    console.error(err);
    process.exit(1);
  });

  // Catch unhandled exceptions
  process.on('uncaughtException', (err) => {
    console.error('[RUNTIME] Uncaught Exception found!:');
    console.error(err);
    process.exit(1);
  });

  // Start a users runtime
  sandbox();
};

/**
 * Exports the Runtime module
 * @ignore
 */
module.exports = Runtime;

export {};
