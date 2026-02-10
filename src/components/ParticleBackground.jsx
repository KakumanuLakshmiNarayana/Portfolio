import React, { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import useReducedMotion from '../hooks/useReducedMotion';

/**
 * AI/ML themed particle background with neural network connections
 * Features animated particles with connecting lines
 */
export default function ParticleBackground() {
  const prefersReducedMotion = useReducedMotion();

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  // Don't render particles if user prefers reduced motion
  if (prefersReducedMotion) {
    return null;
  }

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1
        },
        background: {
          color: {
            value: '#0f1016'
          }
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              area: 800
            }
          },
          color: {
            value: ['#a78bfa', '#00eaff', '#ff006e']
          },
          shape: {
            type: 'circle'
          },
          opacity: {
            value: 0.5,
            random: true,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.1,
              sync: false
            }
          },
          size: {
            value: 3,
            random: true,
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 0.5,
              sync: false
            }
          },
          links: {
            enable: true,
            distance: 150,
            color: '#a78bfa',
            opacity: 0.3,
            width: 1,
            triangles: {
              enable: true,
              color: '#00eaff',
              opacity: 0.05
            }
          },
          move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: true,
            straight: false,
            outModes: {
              default: 'bounce'
            },
            attract: {
              enable: true,
              rotate: {
                x: 600,
                y: 1200
              }
            }
          }
        },
        interactivity: {
          detectsOn: 'canvas',
          events: {
            onHover: {
              enable: true,
              mode: 'grab'
            },
            onClick: {
              enable: true,
              mode: 'push'
            },
            resize: {
              enable: true
            }
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.5,
                color: '#00eaff'
              }
            },
            push: {
              quantity: 4
            }
          }
        },
        detectRetina: true
      }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1
      }}
    />
  );
}
