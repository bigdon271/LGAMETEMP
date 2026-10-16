"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Maximize, Minimize, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import type { GameLibraryItem } from "@/config/types/game";

interface Props {
  name: string;
  src: string;
  player: GameLibraryItem["player"];
  sourceUrl?: string;
}
export function GameSection({ name, src, player, sourceUrl }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [fullscreen, setFullscreen] = useState(false);
  const [fullscreenSupported, setFullscreenSupported] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);
  const [message, setMessage] = useState("");
  const [dialogContainer, setDialogContainer] = useState<HTMLElement | null>(
    null,
  );

  useEffect(() => {
    const handleChange = () =>
      setFullscreen(document.fullscreenElement === containerRef.current);
    setFullscreenSupported(
      Boolean(
        document.fullscreenEnabled && containerRef.current?.requestFullscreen,
      ),
    );
    setDialogContainer(containerRef.current);
    document.addEventListener("fullscreenchange", handleChange);
    return () => document.removeEventListener("fullscreenchange", handleChange);
  }, []);

  async function toggleFullscreen() {
    try {
      setMessage("");
      if (document.fullscreenElement === containerRef.current)
        await document.exitFullscreen();
      else await containerRef.current?.requestFullscreen();
    } catch {
      setMessage(
        "Fullscreen is unavailable. You can keep playing in this page.",
      );
    }
  }

  function reload() {
    setMessage("");
    setReloadKey((key) => key + 1);
  }

  return (
    <div
      id="game-section"
      ref={containerRef}
      className="game-player mx-auto w-full max-w-4xl overflow-hidden rounded-lg border bg-background text-foreground"
      style={
        { "--player-ratio": player.width / player.height } as CSSProperties
      }
    >
      <div
        className="player-stage"
        style={{ aspectRatio: `${player.width} / ${player.height}` }}
      >
        <iframe
          key={reloadKey}
          src={src}
          title={name}
          allow={player.allow || "fullscreen"}
          allowFullScreen
          sandbox={player.sandbox}
          referrerPolicy="strict-origin-when-cross-origin"
          className="block h-full w-full border-0"
          style={{ colorScheme: "normal" }}
        />
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 border-t bg-muted p-3">
        <p className="text-left text-xs text-muted-foreground">
          Click inside the player to focus.
        </p>
        <div className="flex flex-wrap gap-2">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" size="sm">
                <RotateCcw data-icon="inline-start" />
                Reload
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent portalContainer={dialogContainer}>
              <AlertDialogHeader>
                <AlertDialogTitle>Reload {name}?</AlertDialogTitle>
                <AlertDialogDescription>
                  {player.reloadWarning}
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={reload}>
                  Reload player
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <Button
            variant="outline"
            size="sm"
            onClick={toggleFullscreen}
            disabled={!fullscreenSupported}
            aria-label={fullscreen ? "Exit fullscreen" : "Enter fullscreen"}
          >
            {fullscreen ? (
              <Minimize data-icon="inline-start" />
            ) : (
              <Maximize data-icon="inline-start" />
            )}
            {fullscreen ? "Exit fullscreen" : "Fullscreen"}
          </Button>
        </div>
      </div>
      <div className="px-3 pb-3 pt-2 text-left text-xs text-muted-foreground">
        <p role="status" aria-live="polite">
          {/* An iframe load event cannot prove that a cross-origin game started. */}
          {message || "If the game does not start, try reloading the player."}
        </p>
        {!fullscreenSupported && (
          <p>
            Fullscreen depends on your browser. On a phone, try landscape
            orientation.
          </p>
        )}
        {sourceUrl && (
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-block underline"
          >
            Open original project
          </a>
        )}
      </div>
    </div>
  );
}
