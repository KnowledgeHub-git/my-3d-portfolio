import { Html, useProgress } from '@react-three/drei';

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html
      as="div"
      center
      className="flex flex-col justify-center items-center"
    >
      <span className="w-10 h-10 border-4 border-t-transparent border-white-700 rounded-full animate-spin" />
      <p className="text-white-800 text-sm font-semibold mt-4">
        {progress !== 0 ? `${progress.toFixed(2)}%` : 'Initializing Immersive Scene...'}
      </p>
    </Html>
  );
};

export default CanvasLoader;
