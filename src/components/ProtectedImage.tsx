import React from 'react';
import Image, { ImageProps } from 'next/image';
import styles from './ProtectedImage.module.css';

interface ProtectedImageProps extends Omit<ImageProps, 'onContextMenu'> {
  showProtectionOverlay?: boolean;
}

const ProtectedImage: React.FC<ProtectedImageProps> = ({ 
  showProtectionOverlay = true,
  className = '', 
  ...props 
}) => {
  // Prevent right-click menu
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    return false;
  };

  // Prevent drag
  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault();
    return false;
  };

  return (
    <div className={`${styles.protectedImageContainer} ${showProtectionOverlay ? styles.showOverlay : ''}`}>
      <div className={styles.protectionMessage}>
        <span>محمي</span>
      </div>
      <Image
        {...props}
        className={`${styles.protectedImage} ${className}`}
        onContextMenu={handleContextMenu}
        onDragStart={handleDragStart}
        draggable="false"
      />
    </div>
  );
};

export default ProtectedImage;
